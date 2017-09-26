import * as csv from "csvtojson";
import * as logger from "morgan";

class fileParser {
  filePath: string = "";

  constructor(path: string) {
      this.filePath = path;

      logger('dev');
  }

convert() {
  csv()
  .fromFile(this.filePath)
  .on('json',(jsonObj)=>{
    // combine csv header row and csv line to a json object
    // jsonObj.a ==> 1 or 4
    console.log(jsonObj);
  })
  .on('done',(error)=>{
    console.log('end')
  });
  }
}

var file = new fileParser('./csv/sample.csv');

file.convert();
