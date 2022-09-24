Feature: Check string palindrome

	Scenario Outline: Periksa string palindrome
		Given Saya masukin string <input>
		When Saya test apakah palindrome
		Then hasilnya harus <output>
		Examples:
			| input		| output	|
			| "makan"	| "false" |
			| "makam"	| "true" 	|
			| "katak"	| "true"  |
			| "katok"	| "false" |