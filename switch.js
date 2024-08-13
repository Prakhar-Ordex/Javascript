let a = 3;

switch (a) {
  case 3:
    console.log( 'Too small' );
    break;
  case 4:
    console.log( 'Exactly!' );
    break;
  case 5:
    console.log( 'Too big' );
    break;
  default:
    console.log( "I don't know such values" );
}
let b = 3;
switch (b) {
    case 1:
    case 2:
    case 3:
    console.log( 'These are small numbers' );
    break;
  case 4:
}