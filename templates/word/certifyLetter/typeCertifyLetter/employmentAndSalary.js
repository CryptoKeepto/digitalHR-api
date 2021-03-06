const officegen = require("officegen");

function generateEmploymentAndSalary(ticket) {
    const docx = officegen({
        "type": "docx",
        "creator": ticket.owner.employeeID,
        "title": "employmentAndSalary",
        "subject": "HR"
    });
    // check error
    docx.on("error", (err) => {
        throw err;
    });

    //----------------------------------//

    var pObj = docx.createP();
    pObj.addLineBreak();
    pObj.addLineBreak();
    pObj.addText(`${ticket.modifiedAt}`, { font_face: "Arial", font_size: 12 });
    pObj.addLineBreak();
    pObj.addLineBreak();

    var pObj = docx.createP();
    pObj.addText("To Whom It May Concern:", { font_face: "Arial", font_size: 12 });
    pObj.addLineBreak();

    var pObj = docx.createP();
    pObj.addText(`This letter serves to certify that <Title> ${ticket.owner.firstName} ${ticket.owner.lastName} is an employee of <Company>.`, { font_face: "Arial", font_size: 12 });
    pObj.addLineBreak();

    var pObj = docx.createP();
    pObj.addText(`<Title> ${ticket.owner.firstName} ${ticket.owner.lastName} joined the Company <Service date>. At present <heshe> serves in the position as <Position> drawing a gross monthly salary of THB «Monthly_Salary». <HeShe> also receives a fixed bonus of one month salary. Therefore, «herhis» annual guaranteed pay is THB <Annual Salary>.`, { font_face: "Arial", font_size: 12 });
    pObj.addLineBreak();

    var pObj = docx.createP();
    pObj.addText("Please feel free to contact the undersigned should you require further information or contact Mr. Bhorrawee Wirachai at 662 648 9758.", { font_face: "Arial", font_size: 12 });
    pObj.addLineBreak();
    pObj.addLineBreak();

    var pObj = docx.createP();
    pObj.addText("Yours truly,", { font_face: "Arial", font_size: 12 });
    pObj.addLineBreak();
    pObj.addLineBreak();

    var pObj = docx.createP();
    pObj.addText("Jiraporn Wogpasuk", { font_face: "Arial", font_size: 12 });
    pObj.addLineBreak();
    pObj.addText("Human Resources Manager", { font_face: "Arial", font_size: 12 });
    pObj.addLineBreak();
    pObj.addText("Telephone: 662 648 9775", { font_face: "Arial", font_size: 12 });

    var pObj = docx.createP();
    pObj.addLineBreak();
    pObj.addLineBreak();
    pObj.addLineBreak();
    pObj.addLineBreak();
    pObj.addLineBreak();
    pObj.addLineBreak();
    pObj.addLineBreak();
    pObj.addLineBreak();
    pObj.addText("Not valid without the company’s seal", { font_face: "Arial", font_size: 12, bold: true });

    return docx;

}


module.exports = generateEmploymentAndSalary;
