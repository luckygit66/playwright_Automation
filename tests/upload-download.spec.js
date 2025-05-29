const ExcelJs = require('exceljs');

const { test, expect } = require('@playwright/test');



async function writeExcelTest(searchText,replaceText,change,filePath)
{
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet('Sheet1');
    const output = await readExcel(worksheet,searchText);
    const cell =  worksheet.getCell(output.row,output.column + change.colChange);
    cell.value = replaceText;
    await  workbook.xlsx.writeFile(filePath)
}

async function readExcel(worksheet,searchText)
{
    let output = {row:-1,column:-1};
    worksheet.eachRow((row,rowNumber)=>
        {
            row.eachCell((cell,colNumber)=>
            {
               if(cell.value===searchText)
               {

               output.row =rowNumber;
               output.column =colNumber;

               }
            }
            );
        });
        return output;
}

test('Upload download excel validation',async ({page})=>
{
    const textSearch = "Mango";
    const updateValue = 400
    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html",{ waitUntil: 'networkidle' });
    const downloadPromise = page.waitForEvent('download');
    
    await page.locator('#downloadButton').click();
    const download = await downloadPromise;
    const filePath = 'C:\\Users\\DELL\\Downloads\\download.xlsx';
    await download.saveAs(filePath);
    console.log('Download Complete:', filePath);
    await writeExcelTest(textSearch,updateValue,{rowChange:0,colChange:2},"C:\\Users\\DELL\\Downloads\\download.xlsx");
    await page.locator('#fileinput').click();
    
    await page.locator('#fileinput').setInputFiles("C:\\Users\\DELL\\Downloads\\download.xlsx");
    
    const textLocator = await page.getByText(textSearch);
    const desiredRow = await page.getByRole('row').filter({has:textLocator});
    expect (await desiredRow.getByRole('cell',{name:updateValue}).textContent()).toContain(updateValue.toString());
    //expect(desiredRow.locator("#cell-4-undefined")).toContainText(updateValue);
    
    

});