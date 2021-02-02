let myArray = [
  {
    info: `1. CSS import`,
    code: `
&ltlink href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"&gt`,
  },
  {
    info: `2. Jquery and JS`,
    code: `
&ltscript src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"&gt&lt/script&gt`,
  },
  {
    info: `3. Navbar`,
    code: `
&ltnav class="navbar navbar-expand-lg navbar-light bg-light"&gt
  &ltdiv class="container-fluid"&gt
    &lta&gt class="navbar-brand" href="#"&gtNavbar&lt/a&gt
    &ltbutton class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"&gt
      &ltspan&gt class="navbar-toggler-icon"&gt&lt/span&gt
    &lt/button&gt
    &ltdiv class="collapse navbar-collapse" id="navbarSupportedContent"&gt
      &ltul class="navbar-nav me-auto mb-2 mb-lg-0"&gt
        &ltli class="nav-item"&gt
          &lta&gt class="nav-link active" aria-current="page" href="#"&gtHome&lt/a&gt
        &lt/li&gt
        &ltli class="nav-item"&gt
          &lta&gt class="nav-link" href="#"&gtLink&lt/a&gt
        &lt/li&gt
      &lt/ul&gt
      &ltform class="d-flex"&gt
        &ltinput class="form-control me-2" type="search" placeholder="Search" aria-label="Search"&gt
        &ltbutton&gt class="btn btn-outline-success" type="submit"&gtSearch&lt/button&gt
      &lt/form&gt
    &lt/div&gt
  &lt/div&gt
&lt/nav&gt`,
  },
  {
    info: `4. Modal`,
    code: `
&lt!-- Button trigger modal --&gt
&ltbutton type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"&gt
  Launch demo modal
&lt/button&gt

&lt!-- Modal --&gt
&ltdiv class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"&gt
  &ltdiv class="modal-dialog"&gt
    &ltdiv class="modal-content"&gt
      &ltdiv class="modal-header"&gt
        &lth5 class="modal-title" id="exampleModalLabel"&gtModal title&lt/h5&gt
        &ltbutton type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"&gt&lt/button&gt
      &lt/div&gt
      &ltdiv class="modal-body"&gt
        ...
      &lt/div&gt
      &ltdiv class="modal-footer"&gt
        &ltbutton type="button" class="btn btn-secondary" data-bs-dismiss="modal"&gtClose&lt/button&gt
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
  &ltdiv&gt class="mb-3"&gt
    &ltinput type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"&gt
  &lt/div&gt
  &ltdiv&gt class="mb-3"&gt
    &ltinput type="password" class="form-control" id="exampleInputPassword1"&gt
  &lt/div&gt
  &ltdiv&gt class="mb-3 form-check"&gt
    &ltinput type="checkbox" class="form-check-input" id="exampleCheck1"&gt
  &lt/div&gt
  &ltbutton&gt type="submit" class="btn btn-primary"&gtSubmit&lt/button&gt
&lt/form&gt`,
  },
];
