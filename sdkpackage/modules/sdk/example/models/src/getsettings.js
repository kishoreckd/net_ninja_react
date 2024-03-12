class Settings {
  constructor({
    companyName,
    companyEmail,
    companyPhone,
    companyLogo,
    companyWebsite,
    companyAddress,
    feedbackManager,
    companyTwitter,
    webhooks,
    hrTeamGroup,
    notSuitable,
    interviewScheduled,
    hrTeam,
    googleCalendar,
    googleCalendarCredentialsJson,
    googleCalendarStatus,
    ticketSettings,
    ticketMobileNo,
    ticketEmail,
    youtubeFeeds,
    youtubeChannelId,
    youtubeApiKey,
    youtubeFeedsStatus,
    okrGeneral,
    okrRangeType,
    organisationOkrCreators,
    companyTree,
    companyTreeType,
    generalSocialSettings,
    autoRegister,
    emailDomains,
    defaultRole,
    googleStatus,
    facebookStatus,
    microsoftStatus,
    yahooStatus,
  }) {
    this.companyName = companyName;
    this.companyEmail = companyEmail;
    this.companyPhone = companyPhone;
    this.companyLogo = companyLogo;
    this.companyWebsite = companyWebsite;
    this.companyAddress = companyAddress;
    this.feedbackManager = feedbackManager;
    this.companyTwitter = companyTwitter;
    this.webhooks = webhooks;
    this.hrTeamGroup = hrTeamGroup;
    this.notSuitable = notSuitable;
    this.interviewScheduled = interviewScheduled;
    this.hrTeam = hrTeam;
    this.googleCalendar = googleCalendar;
    this.googleCalendarCredentialsJson = googleCalendarCredentialsJson;
    this.googleCalendarStatus = googleCalendarStatus;
    this.ticketSettings = ticketSettings;
    this.ticketMobileNo = ticketMobileNo;
    this.ticketEmail = ticketEmail;
    this.youtubeFeeds = youtubeFeeds;
    this.youtubeChannelId = youtubeChannelId;
    this.youtubeApiKey = youtubeApiKey;
    this.youtubeFeedsStatus = youtubeFeedsStatus;
    this.okrGeneral = okrGeneral;
    this.okrRangeType = okrRangeType;
    this.organisationOkrCreators = organisationOkrCreators;
    this.companyTree = companyTree;
    this.companyTreeType = companyTreeType;
    this.generalSocialSettings = generalSocialSettings;
    this.autoRegister = autoRegister;
    this.emailDomains = emailDomains;
    this.defaultRole = defaultRole;
    this.googleStatus = googleStatus;
    this.facebookStatus = facebookStatus;
    this.microsoftStatus = microsoftStatus;
    this.yahooStatus = yahooStatus;
  }
}

class GetSettings {
  constructor({ settings }) {
    this.settings = settings;
  }
}

const getSettingsFromJson = (json) => {
  return new GetSettings({
    settings: new Settings({
      companyName: json.company_name,
      companyEmail: json.company_email,
      companyPhone: json.company_phone,
      companyLogo: json.company_logo,
      companyWebsite: json.company_website,
      companyAddress: json.company_address,
      feedbackManager: json.feedback_manager,
      companyTwitter: json.company_twitter,
      webhooks: json.webhooks,
      hrTeamGroup: json.hr_team_group,
      notSuitable: json.not_suitable,
      interviewScheduled: json.interview_scheduled,
      hrTeam: json.hr_team,
      googleCalendar: json.google_calendar,
      googleCalendarCredentialsJson: json.google_calendar_credentials_json,
      googleCalendarStatus: json.google_calendar_status,
      ticketSettings: json.ticket_settings,
      ticketMobileNo: json.ticket_mobile_no,
      ticketEmail: json.ticket_email,
      youtubeFeeds: json.youtube_feeds,
      youtubeChannelId: json.youtube_channel_id,
      youtubeApiKey: json.youtube_api_key,
      youtubeFeedsStatus: json.youtube_feeds_status,
      okrGeneral: json.okr_general,
      okrRangeType: json.okr_range_type,
      organisationOkrCreators: json.organisation_okr_creators,
      companyTree: json.company_tree,
      companyTreeType: json.company_tree_type,
      generalSocialSettings: json.general_social_settings,
      autoRegister: json.auto_register,
      emailDomains: json.email_domains,
      defaultRole: json.default_role,
      googleStatus: json.google_status,
      facebookStatus: json.facebook_status,
      microsoftStatus: json.microsoft_status,
      yahooStatus: json.yahoo_status,
    }),
  });
};
