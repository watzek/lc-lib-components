import { Component } from '@stencil/core'

@Component({
  tag: 'library-header',
  styleUrl: 'library-header.scss'
})
export class LibraryHeader {
  
  render() {
    return (
      <div class="library-header container">
        <div class="row">
          <div class="library-brand">
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
              <slot name="library-search" />
            </div>
            <div class="row">
              <slot name="library-info" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
