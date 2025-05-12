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
			'percentageIncreaseLabel' => array(
				'type' => 'string',
				'default' => 'Percentage Increase'
			),
			'hours' => array(
				'type' => 'number',
				'default' => 12
			),
			'hoursLabel' => array(
				'type' => 'string',
				'default' => 'Hours'
			),
			'days' => array(
				'type' => 'number',
				'default' => 5
			),
			'daysLabel' => array(
				'type' => 'string',
				'default' => 'Days'
			),
			'weeksPerYear' => array(
				'type' => 'number',
				'default' => 52
			),
			'weeksPerYearLabel' => array(
				'type' => 'string',
				'default' => 'Weeks per year'
			),
			'unitsPerHour' => array(
				'type' => 'number',
				'default' => 22500
			),
			'unitsPerHourLabel' => array(
				'type' => 'string',
				'default' => 'Units per hour'
			),
			'profitPerUnit' => array(
				'type' => 'number',
				'default' => 2
			),
			'profitPerUnitLabel' => array(
				'type' => 'string',
				'default' => 'Profit per unit'
			),
			'profitPerYearLabel' => array(
				'type' => 'string',
				'default' => 'Profit per year'
			),
			'unitsPerYearLabel' => array(
				'type' => 'string',
				'default' => 'Units per year'
			),
			'hoursInWeekLabel' => array(
				'type' => 'string',
				'default' => 'Hours in a week 24/7'
			),
			'extraHoursLabel' => array(
				'type' => 'string',
				'default' => 'Extra hours'
			),
			'extraUnitsPerWeekLabel' => array(
				'type' => 'string',
				'default' => 'Extra units per week'
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => '#3e6bfc'
			),
			'sliderColor' => array(
				'type' => 'string',
				'default' => '#58ffa8'
			),
			'textColor' => array(
				'type' => 'string',
				'default' => '#fff'
			),
			'accentColor' => array(
				'type' => 'string',
				'default' => '#fff'
			),
			'baseCurrency' => array(
				'type' => 'string',
				'default' => 'GBP'
			),
			'profitPerUnitCurrency' => array(
				'type' => 'string',
				'default' => 'GBP'
			)
		),
		'textdomain' => 'roi-calculator-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
