/*
   This script is used to add more apps to the Pop Up Menu
*/



const container = document.querySelectorAll('.apps-module-tiles')[0];

// view of each app
const view = (src, href, name) => `
      <a class="app-link" href="${href}">
         <img width="22px" height="22px"
            src="${src}">
         <label class="app-title">${name}</label>
      </a>`;


// list of app - name, image(icon), link
data = [
   {
      "name":"Microsoft 365",
      "src": "https://assets.msn.com/staticsb/statics/latest/icons/office-icons/Office_24x.svg",
      "href": "https://www.microsoft.com/microsoft-365?ocid=PROD_Edge_CONS_WebXT_FM_EDG_NTP-Waffle-Office"
   },
   {
      "name":"Teams",
      "src": "https://assets.msn.com/staticsb/statics/latest/icons/office-icons/Teams_24x.svg",
      "href": "https://teams.microsoft.com/?ocid=PROD_Edge_CONS_WebXT_FM_EDG_NTP-Waffle-Teams"
   },
   {
      "name":"One Drive",
      "src": "https://assets.msn.com/staticsb/statics/latest/icons/office-icons/OneDrive_24x.svg",
      "href": "https://onedrive.live.com/?ocid=PROD_Edge_CONS_WebXT_FM_EDG_NTP-Waffle-OneDrive"
   },
   {
      "name":"Outlook",
      "src": "https://assets.msn.com/staticsb/statics/latest/icons/office-icons/Outlook_24x.svg",
      "href": "https://outlook.live.com/mail/?ocid=PROD_Edge_CONS_WebXT_FM_EDG_NTP-Waffle-Outlook"
   },
   {
      "name":"Word",
      "src": "https://assets.msn.com/staticsb/statics/latest/icons/office-icons/Word_24x.svg",
      "href": "https://www.office.com/launch/word"
   },
   {
      "name":"Excel",
      "src": "https://assets.msn.com/staticsb/statics/latest/icons/office-icons/Excel_24x.svg",
      "href": "https://www.office.com/launch/excel"
   },
   {
      "name":"Power Point",
      "src": "https://assets.msn.com/staticsb/statics/latest/icons/office-icons/PowerPoint_24x.svg",
      "href": "https://www.office.com/launch/powerPoint"
   },
   {
      "name":"One Note",
      "src": "https://assets.msn.com/staticsb/statics/latest/icons/office-icons/OneNote_24x.svg",
      "href": "https://www.office.com/launch/oneNote"
   },
   {
      "name":"To Do",
      "src": "https://assets.msn.com/staticsb/statics/latest/icons/office-icons/ToDo_24x.svg",
      "href": "https://www.office.com/launch/todo"
   },
   {
      "name":"Calendar",
      "src": "https://assets.msn.com/staticsb/statics/latest/icons/office-icons/Calendar_24x.svg",
      "href": "https://outlook.live.com/calendar/?ocid=PROD_Edge_CONS_WebXT_FM_EDG_NTP-Waffle-Calendar"
   },
   {
      "name":"Skype",
      "src": "https://assets.msn.com/staticsb/statics/latest/icons/office-icons/Skype_24x.svg",
      "href": "https://www.office.com/launch/skype"
   }
]


// inserting view to container
data.forEach(element => {
   container.insertAdjacentHTML('beforeend', view(element.src, element.href, element.name));
});