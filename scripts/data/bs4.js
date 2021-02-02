let myArray = [
  {
    info: `1. CSS import`,
    code: `
&ltlink rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"&gt`,
  },
  {
    info: `2. Jquery and JS`,
    code: `
&ltscript src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"&gt&lt/script&gt
&ltscript src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"&gt&lt/script&gt`,
  },
  {
    info: `3. Navbar`,
    code: `
&ltnav class="navbar navbar-expand-lg navbar-light bg-light"&gt
  &lta&gt class="navbar-brand" href="#"&gtNavbar&lt/a&gt
  &ltbutton class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"&gt
    &ltspan&gt class="navbar-toggler-icon"&gt&lt/span&gt
  &lt/button&gt

  &ltdiv class="collapse navbar-collapse" id="navbarSupportedContent"&gt
    &ltul class="navbar-nav mr-auto"&gt
      &ltli class="nav-item active"&gt
        &lta class="nav-link" href="#"&gtHome &ltspan&gt class="sr-only"&gt(current)&lt/span&gt&lt/a&gt
      &lt/li&gt
      &ltli class="nav-item"&gt
        &lta&gt class="nav-link" href="#"&gtLink&lt/a&gt
      &lt/li&gt
    &lt/ul&gt
    &ltform class="form-inline my-2 my-lg-0"&gt
      &ltinput class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"&gt
      &ltbutton&gt class="btn btn-outline-success my-2 my-sm-0" type="submit"&gtSearch&lt/button&gt
    &lt/form&gt
  &lt/div&gt
&lt/nav&gt`,
  },
  {
    info: `4. Modal`,
    code: `
&lt!-- Button trigger modal --&gt
&ltbutton type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"&gt
  Launch demo modal
&lt/button&gt

&lt!-- Modal --&gt
&ltdiv class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"&gt
  &ltdiv class="modal-dialog"&gt
    &ltdiv class="modal-content"&gt
      &ltdiv class="modal-header"&gt
        &lth5 class="modal-title" id="exampleModalLabel"&gtModal title&lt/h5&gt
        &ltbutton type="button" class="close" data-dismiss="modal" aria-label="Close"&gt
          &ltspan aria-hidden="true"&gt&times;&lt/span&gt
        &lt/button&gt
      &lt/div&gt
      &ltdiv class="modal-body"&gt
        ...
      &lt/div&gt
      &ltdiv class="modal-footer"&gt
        &ltbutton type="button" class="btn btn-secondary" data-dismiss="modal"&gtClose&lt/button&gt
        &ltbutton type="button" class="btn btn-primary"&gtSave changes&lt/button&gt
      &lt/div&gt
    &lt/div&gt
  &lt/div&gt
&lt/div&gt`,
  },
  {
    info: `5. Form`,
    code: `
&ltform&gt
  &ltdiv class="form-group"&gt
    &ltlabel&gt for="exampleInputEmail1"&gtEmail address&lt/label&gt
    &ltinput type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"&gt
    &ltsmall&gt id="emailHelp" class="form-text text-muted"&gtWe'll never share your email with anyone else.&lt/small&gt
  &lt/div&gt
  &ltdiv class="form-group"&gt
    &ltlabel&gt for="exampleInputPassword1"&gtPassword&lt/label&gt
    &ltinput type="password" class="form-control" id="exampleInputPassword1"&gt
  &lt/div&gt
  &ltdiv class="form-group form-check"&gt
    &ltinput type="checkbox" class="form-check-input" id="exampleCheck1"&gt
    &ltlabel&gt class="form-check-label" for="exampleCheck1"&gtCheck me out&lt/label&gt
  &lt/div&gt
  &ltbutton&gt type="submit" class="btn btn-primary"&gtSubmit&lt/button&gt
&lt/form&gt`,
  },
];
