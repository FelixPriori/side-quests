import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button/Button';


export default {title: 'Button'}

export const base = () => <Button>Base</Button>
export const confirm  = () => <Button confirm>Confirm</Button>
export const danger  = () => <Button danger>Cancel</Button>

