import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'library-search',
  host: {
    slot: 'library-search'
  }
})
export class LibraryInfo {
  @Prop() searchLink: string
  @Prop() placeholder: string
  @Prop() cxToken: string

  render() {
    return (
      <div class="library-search hidden-sm col-md-12">
        <form class="form-inline" id="cse-search-box" action={ this.searchLink }>
          <div class="form-group">
            <input class="site-search-input form-control" type="text" name="q" placeholder={ this.placeholder } />
            <input class="site-search-go form-control" type="submit" name="sa" value="Go" />
          </div>
          <input type="hidden" name="cx" value={ this.cxToken } />
          <input type="hidden" name="ie" value="UTF-8" />
        </form>
      </div>
    )
  }
}
