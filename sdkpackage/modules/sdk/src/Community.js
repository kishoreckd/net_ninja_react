  
 class MyCommunity {
    
    constructor(list) {
      this.list = list;
    }
  
    static fromJson(json) {
      return new MyCommunity(
        json.map(item => Community.fromJson(item))
      );
    }
  }
  
  class Community {
    constructor({
      domain,
      domainEmail,
      companyName,
    }) {
      this.domain = domain || '';
      this.domainEmail = domainEmail || '';
      this.companyName = companyName || '';
    }
  
    static fromJson(json) {
      return new Community({
        companyName: json['companyName'],
        domain: json['domain'],
        domainEmail: json['domainEmail'],
      });
    }
  
    toJson() {
      return {
        'company_name': this.companyName,
        'domain': this.domain,
        'domain_email': this.domainEmail,
      };
    }
  }

  export default MyCommunity