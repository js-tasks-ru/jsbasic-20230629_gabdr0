function highlight(table) {
  for (const tr of table.tBodies[0].rows) {
    if( tr.cells[3].dataset.available === "true" ) {
      tr.classList.add( "available" );
    } else if ( tr.cells[3].dataset.available === "false" ) {
      tr.classList.add( "unavailable" );
    } else if ( tr.cells[3].dataset.available === undefined ) {
      tr.setAttribute( "hidden", "hidden" );
    }

    if( tr.cells[2].textContent === "m" ) {
      tr.classList.add( "male" );
    } else {
      tr.classList.add( "female" );
    }

    if( Number(tr.cells[1].textContent) < 18 ) {
      tr.style.textDecoration = "line-through";
    }
  }
}
