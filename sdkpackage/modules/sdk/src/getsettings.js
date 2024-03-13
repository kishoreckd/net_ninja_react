// class GetSettings {
//   constructor(settings) {
//     this.settings = settings;
//   }

//   static fromJson(json) {
//     const settings = new Settings(json.settings);
//     return new GetSettings(settings);
//   }
// }

// class Settings {
//   constructor(settings) {
//     for (let [key, value] of Object.entries(settings)) {

//       this[key] = value;
//     }
//   }
// }

// export default GetSettings;

class GetSettings {
  constructor(settings) {
    this.settings = settings;
  }

  static fromJson(json) {
    return new GetSettings(Settings.fromJson(json.settings));
  }
}

class Settings {
  constructor({
    companyName,
    companyEmail,
    companyPhone,
    companyLogo,
   
  }) {
    this.companyName = companyName || '';
    this.companyEmail = companyEmail || '';
    this.companyPhone = companyPhone || '';
    this.companyLogo = companyLogo || '';
   
  }

  static fromJson(json) {
    return new Settings({
      companyName: json.company_name,
      companyEmail: json.company_email,
      companyPhone: json.company_phone,
      companyLogo: json.company_logo,
     
    });
  }
}

export default GetSettings;
