import { Component } from '@stencil/core'
import { LibraryInfo } from '../library-search/library-search';

@Component({
  tag: 'library-navbar'
})
export class LibraryNavbar  {
  
  render() {
    return (
      <nav class="navbar header-pane header-nav">
      <div class="container no-pad">
      <div class="navbar-header">
        <div class="visible-xs-inline">
          <div id="api_hours_today_iid3636_lid4016" class="visible-xs-inline-block">
          </div>
        </div>
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#watzek-top-navbar" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="glyphicon glyphicon-menu-hamburger"></span>
        </button>
      </div>
      
      <div class="collapse navbar-collapse no-pad" id="watzek-top-navbar" aria-label="Main menu">
      <ul class="nav navbar-nav" role="navigation">
      <li class="dropdown" aria-haspopup="true">
      <a href="/nav/ql" class="dropdown-toggle" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Quick Links <span class="caret"></span></a>
      <ul class="dropdown-menu">
      <li role="link"><a href="/your-accounts">Your Accounts</a></li>
      <li role="link"><a href="https://primo.lclark.edu/primo-explore/courses/watzek?vid=LCC">Course Reserves</a></li>
      <li role="link"><a href="/research-guides/course-guides">Course Guides</a></li>
      <li role="link"><a href="/research-guides/style-guides">Style Guides</a></li>
      <li role="link"><a href="/hours-calendar">Hours & Calendar</a></li>
      <li role="link"><a href="http://libcal.lclark.edu/booking/studyrooms">Study Rooms</a></li>
      <li role="link"><a href="/suggest-purchase">Suggest a Purchase</a></li>
      <li role="link"><a href="https://watzek.on.worldcat.org/discovery" target="_blank">WorldCat</a></li>
      </ul>
      </li>
      <li class="dropdown">
      <a href="/nav/research" class="dropdown-toggle" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Research <span class="caret"></span></a>
      <ul class="dropdown-menu">
      <li role="link"><a href="/research-guides/subject-guides">Research Guides by Subject</a></li>
      <li role="link"><a href="/research-guides/course-guides">Research Guides by Course</a></li>
      <li role="link"><a href="/az.php">A-Z List of Databases</a></li>
      <li role="link"><a href="http://specialcollections.lclark.edu/">Special Collections</a></li>
      </ul>
      </li>
      <li class="dropdown">
      <a href="/nav/borrowing" class="dropdown-toggle" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Borrowing <span class="caret"></span></a>
      <ul class="dropdown-menu">
      <li role="link"><a href="/your-accounts">Your Accounts</a></li>
      <li role="link"><a href="/borrowing-info">Borrowing Info</a></li>
      <li role="link"><a href="https://primo.lclark.edu/primo-explore/courses/watzek?vid=LCC">Course Reserves</a></li>
      <li role="link"><a href="https://illiad.lclark.edu/illiad/Logon.html">Interlibrary Loan</a></li>
      </ul>
      </li>
      <li class="dropdown">
      <a href="/nav/help" class="dropdown-toggle" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Get Help <span class="caret"></span></a>
      <ul class="dropdown-menu">
      <li role="link"><a href="/help/ask">Ask a Librarian</a></li>
      <li role="link"><a href="/help/liaisons">Who is My Librarian?</a></li>
      <li role="link"><a href="/help/videos">Video Tutorials</a></li>
      <li role="link"><a href="/help/consultation">Schedule a Consultation</a></li>
      </ul>
      </li>
      <li>
      <a href="/nav/about" role="link">About the Library</a>
      </li>
      </ul>
      <ul class="nav navbar-nav navbar-right" role="navigation">
      <li>
      <a href="//primo.lclark.edu/primo-explore/account?vid=LCC">
      <span class="glyphicon glyphicon-user"></span>
      <span>Your Primo Account</span>
      </a>
      </li>
      </ul>
      </div>
      </div>
      </nav>
    )
  }
}