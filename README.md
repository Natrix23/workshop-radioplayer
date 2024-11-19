# workshop-radioplayer

1. What is OWASP and what is its primary mission as described in the article?
OWASP (Open Worldwide Application Security Project) är en öppen gemenskap som arbetar för att hjälpa organisationer att utveckla, köpa och underhålla applikationer och API:er som är säkra och pålitliga. Projektet erbjuder verktyg, standarder, forskning, och utbildningsmaterial som är öppet tillgängliga för att förbättra applikationssäkerhet.

2. Explain the concept of "Injection". Provide an example of how an injection attack could compromise a web application's security.
Injection innebär att en angripare skickar skadlig kod, såsom SQL-kommandon, in i ett system via en sårbar inmatningspunkt. Till exempel kan en SQL Injection ske om en webbsida accepterar användarinmatning utan validering och skickar det direkt till en databas. En angripare kan då manipulera frågan för att få obehörig åtkomst till känslig data. Ett vanligt exempel är att manipulera en inloggningsformulär för att kringgå autentisering.

3. Explain two strategies to prevent Broken Authentication vulnerabilities.
   - Implementera multifaktorautentisering (MFA): Detta kräver att användaren verifierar sin identitet via flera steg, exempelvis lösenord och engångskod.
   - Begränsa sessionstiden och använd säkra cookies: Genom att minska hur länge användarsessioner är aktiva och säkra kakor kan obehörig åtkomst förhindras även om en session kapas.

4. Describe the potential consequences of Insecure Deserialization in web applications. How can developers protect against such attacks?
Osäker deserialisering kan göra det möjligt för en angripare att exekvera skadlig kod, manipulera data eller ta över systemet. För att skydda sig kan utvecklare använda tekniker som att validera eller filtrera inkommande objekt och använda säkra serialiseringsformat.

5. Briefly define Cross-Site Scripting (XSS) as outlined in the article and list two methods suggested in the article to prevent XSS attacks in web applications.
Cross-Site Scripting (XSS) är en typ av attack där en angripare injicerar skadlig kod i en webbsida som körs i användarens webbläsare.
   - Använd datavalidering och konvertering (escaping): All användarinmatning ska valideras och konverteras för att förhindra exekvering av skript.
   - Implementera Content Security Policy (CSP): Detta begränsar vilka resurser som webbläsaren kan köra, vilket minskar risken för XSS-attacker.
