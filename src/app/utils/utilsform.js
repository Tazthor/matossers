  export const validateAltaForm = async function (data, majorEdat) {
    var errors = [];
    if (data.genere == "" || data.genere == undefined) {
      errors.push({
        error: true,
        message: "El camp Genere és obligatori",
      });
    }
    if (data.dataNaixement == "" || data.dataNaixement == undefined) {
      errors.push({
        error: true,
        message: "La data de naixement no pot estar buida",
      });
    }
    if (data.nif == "" || data.nif == undefined) {
      errors.push({
        error: true,
        message: "El camp DNI és obligatori",
        });
    }
    if (data.nom == "" || data.nom == undefined) {
      errors.push({
        error: true,
        message: "El camp Nom és obligatori",
      });
    }
    if (data.cognom == "" || data.cognom == undefined) {
      errors.push({
        error: true,
        message: "El camp Cognom és obligatori",
      });
    }
    if (majorEdat === true) {
        if (data.tutor == "" || data.tutor == undefined) {
          errors.push({
            error: true,
            message: "El camp Tutor és obligatori per a menors de 18 anys",
          });
        }
    }
    if (data.email == "" || data.email == undefined) {
      errors.push({
        error: true,
        message: "El correu electrònic és obligatori",
      });
    }
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(data.email)) {
      errors.push({
        error: true,
        message: "El correu electrònic no té un format correcte",
      });
    }
    if (data.phone == "" || data.phone == undefined) {
        errors.push({
          error: true,
          message: "El telèfon és obligatori",
        });
    }
    if (data.adreca == "" || data.adreca == undefined) {
        errors.push({
          error: true,
            message: "Has de posar la teva adreça",
        });
    }
    if (data.poblacio == "" || data.poblacio == undefined) {
        errors.push({
          error: true,
            message: "Has de posar la teva població",
        });
    } 
    if (data.codiPostal == "" || data.codiPostal == undefined) {
        errors.push({
          error: true,
            message: "Has de posar el teu codi postal",
        });
    }
    if (errors.length == 0) {
      if (!data.gdpr) {
        return {
          error: true,
          message: "Has d'acceptar la política de privacitat",
        };
      }
      return { error: false };
    } else if (errors.length == 1) return errors[0];
    else
      return {
        error: true,
        message: "Hi ha camps obligatoris buits al formulari",
      };
  };