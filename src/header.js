import React, {  Component } from 'react';
import moment from 'moment';
import { EmployeeType } from '@/utils/add';


import p from './asset/utils/p';

setTimeout(() => {
  console.log('from header.js: ', p);
}, 6000)


export default class Header extends Component {
  render() {
    return (
      <header>头部{moment().format('YYYY-MM') + EmployeeType['010']}</header>
    )
  }
}