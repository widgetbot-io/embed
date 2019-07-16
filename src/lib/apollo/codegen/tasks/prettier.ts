import { execSync } from 'child_process'
import { generated } from './vars'

execSync(`prettier --write ${generated}/*.ts`)
