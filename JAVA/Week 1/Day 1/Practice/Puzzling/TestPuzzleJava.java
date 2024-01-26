import java.util.ArrayList;
import java.util.Random;
public class TestPuzzleJava {
    
	public static void main(String[] args) {
		PuzzleJava generator = new PuzzleJava();
		ArrayList<Integer> randomRolls = generator.getTenRolls();
		System.out.println(randomRolls);
		
        System.out.println(generator.getRandomLetter());
        System.out.println(generator.getRandomLetterWithArray());
        System.out.println(generator.generatePassword());
        System.out.println(generator.getNewPasswordSet(7));
            ArrayList<Integer> numbersToShuffle = new ArrayList<>();
        for (int i = 1; i <= 10; i++) {
            numbersToShuffle.add(i);
        }
        System.out.println("Before Shuffle: " + numbersToShuffle);
        generator.shuffle(numbersToShuffle);
        System.out.println("After Shuffle: " + numbersToShuffle);

	}
}
