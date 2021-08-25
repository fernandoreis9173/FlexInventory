import { Router } from 'express';
const router = Router();
const request = require('request');
var convert = require('xml-js');
import axios from 'axios';


router.post("/", (req, res) => {

  var linkservice = 'http://webservices.flextronics.com/FlexAD/V1/FlexAD.aspx?username='
  var user = req.body.userText;
  var password = req.body.passwordText;

  var validateAd = linkservice + user + '&password=' + password + '&domain=americas&method=validateuser'

  axios.get(validateAd).
    then((req) => {

      const xml = req.data;
      var  dadosUser = JSON.parse(convert.xml2json(xml, { compact: true, spaces: 4 }));

      const { _cdata } = dadosUser.ResultSet.IsValid;

      console.log(_cdata);

      if (_cdata === 'Y') {
        return res.status(200).json({ msg: "OK" });
      } else {
        return res.status(400).json({ msg: "NOK" });
      }

    })



  // request( validateAd, function (error, response, body ) 
  // {
  //       // var dadosUser =JSON.parse(xmlParser.toJson(body))

  //       // if (dadosUser.ResultSet.IsValid == 'Y') {

  //       //    req.session.user = {

  //       //        id: 'Y' ,
  //       //        user: user
  //       //    }

  //       //    res.redirect("/");

  //       //  } else {         
  //       //    res.redirect("/login");           
  //       //  }

  //       console.log(body);
  // }); 



});

export default router;