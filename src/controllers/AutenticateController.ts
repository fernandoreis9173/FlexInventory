import convert from 'xml-js';
import axios from 'axios';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';
import qs from 'qs';

interface IUser {
    status: string,
    nome: string,
    sobrenome: string,
    email: string,
    displayname: string,
    title: string,
    department: string,
}

class AutenticateController {

    public async Login(username: string, password: string) {


        try {

            const linklogin = `http://webservices.flextronics.com/FlexAD/V1/FlexAD.aspx?${qs.stringify({ username })}&${qs.stringify({ password })}&domain=americas&method=validateuser`;
            const linkUser = `http://webservices.flextronics.com/FlexAD/V1/FlexAD.aspx?filter=(samaccountname=${username})&ptl=givenname,sn,mail,displayName,title,department,manager`;

            let response = await axios.get(linklogin);
    
            let xml = response.data;
            const dadoslogin = JSON.parse(convert.xml2json(xml, { compact: true, spaces: 4 }));

            const { _cdata } = dadoslogin.ResultSet.IsValid;

            if (_cdata === 'Y') {

                let response = await axios.get(linkUser);
                let xml = response.data;
                var dadosUser = JSON.parse(convert.xml2json(xml, { compact: true, spaces: 4 }));

                let User: IUser = {
                    status: _cdata,
                    nome: dadosUser.ResultSet.ADUserInfo.givenname._cdata,
                    sobrenome: dadosUser.ResultSet.ADUserInfo.sn._cdata,
                    email: dadosUser.ResultSet.ADUserInfo.mail._cdata,
                    displayname: dadosUser.ResultSet.ADUserInfo.displayname._cdata,
                    title: dadosUser.ResultSet.ADUserInfo.title._cdata,
                    department: dadosUser.ResultSet.ADUserInfo.department._cdata
                }

                const { secret, expiresIn } = authConfig.jwt;

                const token = sign({}, secret, {
                    subject: dadosUser.ResultSet.ADUserInfo.displayname._cdata,
                    expiresIn,
                });

                return { User, token };


            }
            else {
                throw new Error('User or password invalid!');
            }

        } catch (error) {
            throw new Error('User or password invalid!');
        }


    }
}


export default AutenticateController;