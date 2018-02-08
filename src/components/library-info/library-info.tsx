import { Component, Prop, State } from '@stencil/core'
import queryString from 'query-string'
import moment from 'moment'

@Component({
  tag: 'library-info'
})
export class LibraryInfo {
  @Prop() apiKey: string
  @Prop() calendarId: string
  @Prop() hoursLink: string
  @State() hours: string

  // required for making the API request
  timeMin = moment().hour(8).minute(0).second(0).toISOString()
  timeMax = moment().hour(23).minute(59).second(59).toISOString()
  
  componentDidLoad() {
    // format and send the google calendar API request for hours
    let params = queryString.stringify({
      key: this.apiKey,
      access_type: 'offline',
      timeMin: this.timeMin,
      timeMax: this.timeMax
    })
    let target = `https://www.googleapis.com/calendar/v3/calendars/${this.calendarId}@group.calendar.google.com/events?${params}`
    fetch(target).then(res => res.json().then(json => this.hours = json.items[0].summary))
  }

  render() {
    return (
      <div class="library-info col-xs-12">
        <a href={ this.hoursLink }>
          <span class="glyphicon glyphicon-calendar"></span>
          <span class="hours-date"> { moment().format('ddd, MMM Do') }</span>
          <span class="sr-hidden">: </span>
          <span class="hours-time">{ this.hours || 'loading...' }</span>
        </a>
      </div>
    )
  }
}
