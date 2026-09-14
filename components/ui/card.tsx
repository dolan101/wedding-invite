import type {HTMLAttributes} from 'react';
import {cn} from './cn';
export function Card({className='',...p}:HTMLAttributes<HTMLDivElement>){return <div className={cn('glass rounded-3xl p-5',className)} {...p}/>}