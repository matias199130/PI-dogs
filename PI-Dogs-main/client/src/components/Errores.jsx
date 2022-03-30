export function validation(input) {
  const regexUrl =
    /(http[s]*:\/\/)([a-z\-_0-9/.]+)\.([a-z.]{2,3})\/([a-z0-9\-_/._~:?#[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(jpg|jpeg|png)/i;

  let errors = {};

  if (!input.name) {
    alert((errors.name = "enter the name please"));
  } else if (input.name.search(/^[a-zA-Z\s]*$/)) {
    errors.name = "No numbers or symbols are allowed in the name ";
    alert("solo se permiten letras en el nombre, por favor escriba un nombre valido");
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
    errors.maxHeight = "The miximum height cannot be minor than the minimum height";
  }
  if (!input.minWeight) {
    errors.minWeight = "enter the minimum Weight please";
  } else if (parseInt(input.minWeight) > parseInt(input.maxWeight)) {
    errors.minWeight = "The minimum weight cannot be greater than the maximum weight";
  }
  if (!input.maxWeight) {
    errors.maxWeight = "enter the miximum Weight please";
  } else if (parseInt(input.maxWeight) < parseInt(input.minWeight)) {
    errors.maxWeight = "The maximum height cannot be minor than the minimum height";
  }
  if (!input.minlife_span) {
    errors.minlife_span = "enter the minimum years please";
  } else if (parseInt(input.minlife_span) > parseInt(input.maxlife_span)) {
    errors.minlife_span = "The minimum years cannot be greater than the maximum years";
  }
  if (!input.maxlife_span) {
    errors.maxlife_span = "enter the miximum years please";
  } else if (parseInt(input.maxlife_span) < parseInt(input.minlife_span)) {
    errors.maxlife_span = "The maximum years cannot be minor than the minimum years";
  }
  if (!regexUrl.test(input.image)) {
    errors.url = "Only jpg, jpeg, and png urls are allowed";
  }

  if (!input.temperament) {
    errors.temperament = "ingrese algun temperamento para su perro!";
  }

  return errors;
}
