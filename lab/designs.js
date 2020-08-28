// Select the table
const myTable = $("#pixelCanvas");
// When size is submitted by the user, call makeGrid()
$("input[type='submit']").click(function(e) {
  e.preventDefault(); //Required to avoid submit and page reload
  makeGrid();
});
// Declaring the makeGrid function
function makeGrid() {
  // Your code goes here!
  // Select size input
  const rows = $("#inputHeight").val();
  const cols = $("#inputWidth").val();
  //Reset table if exist
  myTable.children().remove();
  for (r=1; r<=rows; r++){
    myTable.append("<tr></tr>");
    for (c=1; c<=cols; c++){
      myTable.children().last().append("<td></td>");
    };
  };
};
//Listen for cell clicks
myTable.on("click", "td", function() {
  //Get color from color picker
  let color = $("input#colorPicker").val();
  //Apply color to cell
  $(this).attr("bgcolor", color);
});
