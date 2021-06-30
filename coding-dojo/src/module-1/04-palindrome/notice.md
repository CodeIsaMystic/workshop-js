# Kata Palindrome

**NOTE : Un palindrome est un mot ou une phrase qui s'écrit de la même manière en avant et en arrière, en ignorant la ponctuation, la casse et l'espacement.**

<br>

## Subject

1. **Renvoie `true` si la chaîne donnée est un palindrome. 
Sinon, retourne `false`.**

1. Nous passerons **des chaînes avec des formats variés**, tels que `racecar`, `raceCar` et `raceCAR`, entre autres.

2. Nous passerons également **des chaînes avec des symboles spéciaux**, tels que `2A3*3a2`, `2A3` `3a2` et `2_A3*3#A2`.



**HINT :** 
- Vous devrez ***supprimer tous les caractères non alphanumériques***(ponctuation, espaces et symboles) 
- ***tout mettre dans la même casse*** (minuscules ou majuscules)
- ***vérifier les palindromes***.


## Instructions

- palindrome("eye") should return a boolean.
- palindrome("eye") should return true.
- palindrome("_eye") should return true.
  
- palindrome("race car") should return true.
- palindrome("not a palindrome") should return false.
- palindrome("A man, a plan, a canal. Panama") should return true.
- palindrome("never odd or even") should return true.
- palindrome("nope") should return false.
- palindrome("almostomla") should return false.
- palindrome("My age is 0, 0 si ega ym.") should return true.
- palindrome("1 eye for of 1 eye.") should return false.
- palindrome("0_0 (: /-\ :) 0-0") should return true.
- palindrome("five|\_/|four") should return false.
