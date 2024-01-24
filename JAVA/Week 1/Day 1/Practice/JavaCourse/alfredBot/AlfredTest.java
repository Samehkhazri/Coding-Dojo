// AlfredTest.java
public class AlfredTest {

    public static void main(String[] args) {
        AlfredQuotes alfredBot = new AlfredQuotes();

        String testGreeting = alfredBot.basicGreeting();
        String testGuestGreeting = alfredBot.guestGreeting("Beth Kane");
        String testDateAnnouncement = alfredBot.dateAnnouncement();
        String alexisTest = alfredBot.respondBeforeAlexis("Alexis! Play some low-fi beats.");
        String alfredTest = alfredBot.respondBeforeAlexis("I can't find my yo-yo. Maybe Alfred will know where it is.");
        String notRelevantTest = alfredBot.respondBeforeAlexis("Maybe that's what Batman is about. Not winning. But failing.");

        // Print the greetings to test.
        System.out.println(testGreeting);
        System.out.println(testGuestGreeting);
        System.out.println(testDateAnnouncement);
        System.out.println(alexisTest);
        System.out.println(alfredTest);
        System.out.println(notRelevantTest);

        // Ninja Bonus: Test overloaded guestGreeting method
        String ninjaBonusTest = alfredBot.guestGreeting("Bruce Wayne", "evening");
        System.out.println(ninjaBonusTest);

        // Sensei Bonus: Test customAlfredQuote method
        String senseiBonusTest = alfredBot.customAlfredQuote("breaking a valuable artifact");
        System.out.println(senseiBonusTest);
    }
}
