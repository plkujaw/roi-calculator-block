<?php
// This file is generated. Do not modify it manually.
return array(
	'roi-calculator-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/roi-calculator-block',
		'version' => '0.1.0',
		'title' => 'ROI Calculator Block',
		'category' => 'widgets',
		'icon' => 'calculator',
		'description' => 'ROI Calculator Block.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'percentageIncrease' => array(
				'type' => 'number',
				'default' => 1
			),
			'hours' => array(
				'type' => 'number',
				'default' => 12
			),
			'days' => array(
				'type' => 'number',
				'default' => 5
			),
			'weeksPerYear' => array(
				'type' => 'number',
				'default' => 52
			),
			'unitsPerHour' => array(
				'type' => 'number',
				'default' => 22500
			),
			'profitPerUnit' => array(
				'type' => 'number',
				'default' => 2
			)
		),
		'textdomain' => 'roi-calculator-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
