#!/usr/bin/env node

import { welcome, getUserName, greetUser } from '../src/cli.js';


welcome();
const userName = getUserName();
greetUser(userName);
