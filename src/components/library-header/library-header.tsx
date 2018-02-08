import { Component, Prop, State } from '@stencil/core'

@Component({
  tag: 'library-header',
  styleUrl: 'library-header.scss'
})
export class LibraryHeader {
  // background image
  @Prop() backgroundImage: string
  @State() backgroundStyle: {
    'background': string
    'background-size': string
    'background-repeat': string
    'background-position': string
  }

  // for library-info
  @Prop() apiKey: string
  @Prop() calendarId: string
  @Prop() hoursLink: string

  // for library-search
  @Prop() searchLink: string
  @Prop() placeholder: string
  @Prop() cxToken: string

  // load the background
  componentDidLoad() {
    this.backgroundStyle = {
      'background': `url(${this.backgroundImage})`,
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
      'background-position': 'center'
    }
  }

  /**
   * This component has two slots in which to put elements:
   * - library-brand, used for an anchor link to the homepage
   * - institution-brand, used for an anchor link to the college
   * 
   * for more information about the special <slot /> tag, see:
   * developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots
   */
  render() {
    return (
      <div class="library-header container-fluid" style={this.backgroundStyle}>
        <div class="header-brand container">
          <div class="row">
            <div class="library-brand col-xs-12 col-sm-8">
              <div class="row">
                <div class="library-brand col-xs-12">
                  <slot name="library-brand" />
                </div>
              </div>
              <div class="row">
                <div class="institution-brand col-xs-12">
                  <slot name="institution-brand" />
                </div>
              </div>
            </div>
            <div class="hidden-xs hidden-sm col-md-4">
              <div class="row">
                <library-search cx-token={this.cxToken} placeholder={this.placeholder} search-link={this.searchLink} />
              </div>
              <div class="row">
                <library-info apiKey={this.apiKey} calendarId={this.calendarId} hoursLink={this.hoursLink} />
              </div>
            </div>
          </div>
        </div>
        <slot name="library-navbar" />
      </div>
    )
  }
}
