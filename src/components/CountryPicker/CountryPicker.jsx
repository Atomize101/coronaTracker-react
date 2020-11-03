import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';

const CountryPicker = () => {
	return (
		<div>
			<FormControl className={styles.FormControl}>
				<NativeSelect>
					<options value="global">Global</options>
				</NativeSelect>
			</FormControl>
		</div>
	);
};

export default CountryPicker;
