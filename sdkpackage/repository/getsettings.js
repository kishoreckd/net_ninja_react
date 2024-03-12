class Settings {
    constructor({
      companyName,
      companyEmail,
      // Add other  here...
    }) {
      this.companyName = companyName;
      this.companyEmail = companyEmail;
      // Assign other properties here...
    }
  
    static fromJson(json) {
      return new Settings({
        companyName: json.companyName,
        companyEmail: json.companyEmail,
        // Map other properties here...
      });
    }
  }
  
  class GetSettings {
    constructor(settings) {
      this.settings = settings;
    }
  
    static fromJson(json) {
      return new GetSettings(Settings.fromJson(json.settings));
    }
  }
  
  export default GetSettings;
  