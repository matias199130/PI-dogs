export function validation(input) {
  let errors = {};

  if (!input.name) {
    alert((errors.name = "enter the name please"));
  } else if (input.name.search(/^[a-zA-Z\s]*$/)) {
    errors.name = "No numbers or symbols are allowed in the name ";
    alert(
      "solo se permiten letras en el nombre, por favor escriba un nombre valido"
    );
  }
  if (!input.minHeight) {
    errors.minHeight = "enter the minimum height please";
  } else if (parseInt(input.minHeight) > parseInt(input.maxHeight)) {
    errors.minHeight =
      "The minimum height cannot be greater than the maximum height";
  } else if (input.minHeight < 0) {
    errors.minHeight = "Negative numbers are not allowed ";
  }
  if (!input.maxHeight) {
    errors.maxHeight = "enter the miximum height please";
  } else if (parseInt(input.maxHeight) < parseInt(input.minHeight)) {
    errors.maxHeight =
      "The miximum height cannot be minor than the minimum height";
  }
  if (!input.minWeight) {
    errors.minWeight = "enter the minimum Weight please";
  } else if (parseInt(input.minWeight) > parseInt(input.maxWeight)) {
    errors.minWeight =
      "The minimum weight cannot be greater than the maximum weight";
  }
  if (!input.maxWeight) {
    errors.maxWeight = "enter the miximum Weight please";
  } else if (parseInt(input.maxWeight) < parseInt(input.minWeight)) {
    errors.maxWeight =
      "The maximum height cannot be minor than the minimum height";
  }
  if (!input.minlife_span) {
    errors.minlife_span = "enter the minimum years please";
  } else if (parseInt(input.minlife_span) > parseInt(input.maxlife_span)) {
    errors.minlife_span =
      "The minimum years cannot be greater than the maximum years";
  }
  if (!input.maxlife_span) {
    errors.maxlife_span = "enter the miximum years please";
  } else if (parseInt(input.maxlife_span) < parseInt(input.minlife_span)) {
    errors.maxlife_span =
      "The maximum years cannot be minor than the minimum years";
  }

  //   return errors;
  // }

  // // NAME
  // if (!input.name) {
  //   errors.name = "You must type a name";
  // } else {
  //   errors.name = "";
  // }

  // // WEIGHTS
  // if (!input.weight_min) {
  //   // weight min
  //   errors.weight_min = "Type a valid minimal weight number";
  // } else if (!/\d{1,2}/gi.test(input.weight_min)) {
  //   errors.weight_min = "Weight must have min values. Example: '25'";
  // } else {
  //   errors.weight_min = "";
  // }
  // if (!input.weight_max) {
  //   // weight max
  //   errors.weight_max = "Type a valid maxim weight number";
  // } else if (!/\d{1,2}/gi.test(input.weight_max)) {
  //   errors.weight_max = "Weight must have max values. Example: '25'";
  // } else {
  //   errors.weight_max = "";
  // }
  // // HEIGHTS
  // if (!input.height_min) {
  //   // height min
  //   errors.height_min = "Type a valid minimal height number";
  // } else if (!/\d{1,2}/gi.test(input.height_min)) {
  //   errors.height_min = "Height must have min values. Example: '25'";
  // } else {
  //   errors.height_min = "";
  // }
  // if (!input.height_max) {
  //   // height max
  //   errors.height_max = "Type a valid maxim height number";
  // } else if (!/\d{1,2}/gi.test(input.height_max)) {
  //   errors.height_max = "Height must have max values. Example: '25'";
  // } else {
  //   errors.height_max = "";
  // }
  return errors;
}
