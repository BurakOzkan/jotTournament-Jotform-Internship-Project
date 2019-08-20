import React from "react";
import Iframe from "./Iframe";
import axios from "axios";

class TournamentCreate extends React.Component {
    componentDidMount() {
        let tournamentName = "default";

        let formJSON = {
            properties: {
                title: `${tournamentName} ' Sign Up Form`,
                height: "600"
            },
            questions: {
                "0": {
                    type: "control_head",
                    text: `${tournamentName} ' Sign Up Form`,
                    order: "1",
                    name: "Header"
                },
                "1": {
                    headerType: "Default",
                    imageAlign: "Left",
                    name: "heading",
                    order: "1",
                    qid: "1",
                    text: "Tournament Sign Up Form Example",
                    textAlign: "Left",
                    type: "control_head",
                    verticalTextAlign: "Middle"
                },
                "2": {
                    buttonAlign: "Auto",
                    buttonStyle: "None",
                    clear: "No",
                    clearText: "Clear Form",
                    encryptIcon: "No",
                    name: "submit2",
                    order: "6",
                    print: "No",
                    printText: "Print Form",
                    qid: "2",
                    text: "Submit",
                    type: "control_button"
                },
                "5": {
                    name: "input5",
                    order: "2",
                    qid: "5",
                    text:
                        '<p style="text-align: center;"><strong>TEAM INFORMATION</strong></p>',
                    type: "control_text"
                },
                "6": {
                    defaultValue: "",
                    description: "",
                    hint: "",
                    inputTextMask: "",
                    labelAlign: "Auto",
                    maxsize: "30",
                    name: "teamName",
                    order: "3",
                    qid: "6",
                    readonly: "No",
                    required: "No",
                    size: "20",
                    subLabel: "",
                    text: "TEAM NAME",
                    type: "control_textbox",
                    validation: "None"
                },
                "7": {
                    boxAlign: "Center",
                    builderDescription: "",
                    buttontitle: "SELECT A TEAM LOGO",
                    cfname: "Image Upload Preview",
                    customCSS: "text-align: center;",
                    fieldParameters:
                        '[{"name":"buttontitle","readable":"Button Select Text","type":"text","default":"Select Image","tip":"Customize the text on the button for selecting a file (optional). Default is \\"Select Image\\"."},{"name":"uploadtitle","readable":"Button Upload Text","type":"text","default":"Upload Image","tip":"Customize the text on the button for upload a file (optional). Default is \\"Upload Image\\".","paramStatus":"disabled"},{"name":"customCSS","readable":"Custom CSS","type":"textarea","default":"","tip":"Custom styles for the widget especially the buttons and text (optional)"}]',
                    finalSrc: "http://widgets.jotform.io/imagepreview/",
                    frameHeight: "120",
                    frameSrc: "http://widgets.jotform.io/imagepreview/",
                    frameWidth: "300",
                    inlineEditDefaultValue: "Type a question",
                    label: "Yes",
                    labelAlign: "Auto",
                    maxWidth: "587",
                    name: "teamLogo",
                    order: "4",
                    paramChunks: "",
                    qid: "7",
                    required: "No",
                    selectedField: "5295b800485bd19f5d000005",
                    settingNames: "buttontitle,uploadtitle,customCSS",
                    settingNamesCSS: "",
                    static: "No",
                    text: "TEAM LOGO",
                    type: "control_widget",
                    uploadtitle: "Upload Image",
                    widgetTabs:
                        '[["general","settingNames"],["customcss","settingNamesCSS"]]',
                    widgetType: "field"
                },
                "8": {
                    boxAlign: "Left",
                    builderDescription: "",
                    cfname: "Infinite List",
                    columns: "Name{50},NickName{50}, Email",
                    customCSS:
                        "input[type=text], select {\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-sizing: 17;\n}\n",
                    fieldParameters:
                        '[{"name":"columns","readable":"Column Names","type":"text","default":"Name{50}, Email, Age{30}","tip":"Enter comma separated column names. You can also specify every input size by adding value in brackets, e.g. \\"Field Name{123}\\". Default input width is 150 pixels."},{"name":"labelSave","readable":"Save button Label","type":"text","default":"Save","tip":"Change the text for the Save button."},{"name":"labelEdit","readable":"Edit button Label","type":"text","default":"Edit","tip":"Change the text for the Edit button."},{"name":"labelRemove","readable":"Remove button Label","type":"text","default":"Remove","tip":"Change the text for the Remove button."},{"name":"customCSS","readable":"Custom CSS","type":"textarea","default":"","tip":"Custom styles for widget (optional)."},{"name":"showCountOfListItems","readable":" \\u0421ount Rows?","type":"radio","default":"No","options":"Yes,No","tip":"You can use the number of rows in your <a href=\\"https:\\/\\/widgets.jotform.com\\/widget\\/calculation\\" target=\\"_blank\\">form calculations<\\/a>. ","paramStatus":"enabled"}]',
                    finalSrc: "http://widgets.jotform.io/list/",
                    frameHeight: "120",
                    frameSrc: "http://widgets.jotform.io/list/",
                    frameWidth: "550",
                    inlineEditDefaultValue: "Type a question",
                    label: "Yes",
                    labelAlign: "Top",
                    labelEdit: "Edit",
                    labelRemove: "Remove",
                    labelSave: "Save",
                    maxWidth: "587",
                    name: "teamMembers",
                    order: "5",
                    paramChunks: "",
                    qid: "8",
                    required: "No",
                    selectedField: "52987bda949b78ac2b000009",
                    settingNames:
                        "columns,labelSave,labelEdit,labelRemove,customCSS,showCountOfListItems",
                    settingNamesCSS: "",
                    showCountOfListItems: "Yes",
                    static: "No",
                    text: "TEAM MEMBERS",
                    type: "control_widget",
                    widgetTabs:
                        '[["general","settingNames"],["customcss","settingNamesCSS"]]',
                    widgetType: "field"
                }
            },
            emails: {
                title: `Form Baslık:${tournamentName}`,
                height: "600"
            }
        };

        // GETFORM
        // window.JF.getForm("92181413902956", function(response){
        //         *
        //          successful response including form data with given id
        //          .

        //          console.log(response);
        //     });

        //FORM CREATE

        // axios.post(url, body).then(obj => {
        //         console.log(obj.data);
        //     })
    }
    constructor(props) {
        super(props);
        this.state = {
            src: "https://form.jotform.com/92181413902956"
        };

        // This binding is necessary to make `this` work in the callback
    }

    render() {
        return <Iframe source={this.state.src} />;
    }
}
export default TournamentCreate;
