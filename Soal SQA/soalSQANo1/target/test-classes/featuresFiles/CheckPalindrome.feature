Feature: Check string palindrome

	Scenario Outline: Periksa string palindrome
		Given Saya masukin string <input>
		When Saya test apakah palindrome
		Then hasilnya harus <output>
		Examples:
			| input		| output	|
			| "makan"	| "false" |
			| "malam"	| "true" 	|
			| "masam"	| "true"  |
			| "katok"	| "false" |
			
			
			
			