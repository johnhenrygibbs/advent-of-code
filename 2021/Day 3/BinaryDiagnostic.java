import java.io.File;
import java.util.ArrayList;
import java.util.Scanner;

public class BinaryDiagnostic {

    public static void main(String[] args) throws Exception {

        File file = new File("/Users/johngibbs/Desktop/John/Repositories/advent-of-code/2021/Day 3/input.txt");
        Scanner scan = new Scanner(file);
        ArrayList<String> contents = new ArrayList<String>();

        while (scan.hasNextLine()) {

            contents.add(scan.nextLine());

        }

        // Solution for Part One

        String gammaString = "";
        String epsilonString = "";
        int cycle = 0;

        while (cycle < contents.get(0).length()) {

            int counter = 0;

            // Loop that iterates through the input data and builds a gammaString based on most common occurrences.

            for (int i = 0; i < contents.size(); i++) {

                String number = contents.get(i);

                int bit = Character.getNumericValue(number.charAt(cycle));

                if (bit == 1) {

                    counter++;

                } else if (bit == 0) {

                    counter--;

                }

            }

            if (counter > 0) {

                gammaString += '1';

            } else {

                gammaString += '0';

            }

            cycle++;

        }

        // Second loop that builds epsilonString by taking the inverse of gammaString.

        for (int i = 0; i < gammaString.length(); i++) {

            if (gammaString.charAt(i) == '1') {

                epsilonString += '0';

            } else {

                epsilonString += '1';

            }

        }

        // Lastly, we convert the binary numbers to decimals and multiply them for the total power consumption.

        int gammaRate = Integer.parseInt(gammaString, 2);
        int epsilonRate = Integer.parseInt(epsilonString, 2);

        System.out.println(gammaRate * epsilonRate);

        scan.close();

    }

}