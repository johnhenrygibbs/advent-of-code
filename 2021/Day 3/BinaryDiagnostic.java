import java.io.File;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Scanner;

public class BinaryDiagnostic {

    public static int cycle = 0;
    public static int counter = 0;

    // Helper function that uses a loop to iterate through the input data, finding the most common value in the current bit position. Will be called multiple times throughout.

    public static int getMostCommon(ArrayList<String> input) {

        for (int i = 0; i < input.size(); i++) {

            String number = input.get(i);

            int bit = Character.getNumericValue(number.charAt(cycle));

            if (bit == 1) {

                counter++;

            } else if (bit == 0) {

                counter--;

            }

        }

        return counter;

    }

    public static void main(String[] args) throws Exception {

        File file = new File("/Users/johngibbs/Desktop/John/Repositories/advent-of-code/2021/Day 3/input.txt");
        Scanner scan = new Scanner(file);
        Scanner scanFirstCopy = new Scanner(file);
        Scanner scanSecondCopy = new Scanner(file);
        ArrayList<String> contents = new ArrayList<String>();
        ArrayList<String> contentsFirstCopy = new ArrayList<String>();
        ArrayList<String> contentsSecondCopy = new ArrayList<String>();

        while (scan.hasNextLine()) {

            contents.add(scan.nextLine());

        }

        // Two copies of the input data are read in for Part Two.

        while (scanFirstCopy.hasNextLine()) {

            contentsFirstCopy.add(scanFirstCopy.nextLine());

        }

        while (scanSecondCopy.hasNextLine()) {

            contentsSecondCopy.add(scanSecondCopy.nextLine());

        }

        // Solution for Part One

        String gammaString = "";
        String epsilonString = "";

        // While loop that calls helper function and builds a gammaString based on most common occurrences.

        while (cycle < contents.get(0).length()) {

            int result = getMostCommon(contents);

            if (result > 0) {

                gammaString += '1';

            } else {

                gammaString += '0';

            }

            cycle++;
            counter = 0;

        }

        // For loop that builds epsilonString by taking the inverse of gammaString.

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

        // Solution for Part Two

        cycle = 0;

        // Finds the oxygen generator rating by using a while loop and an instance of the Iterator class to remove numbers which do not match the bit criteria.

        while (contentsFirstCopy.size() > 1) {

            int result = getMostCommon(contentsFirstCopy);

            Iterator<String> itr = contentsFirstCopy.iterator();

            while (itr.hasNext()) {

                String line = itr.next();

                if (result >= 0 && line.charAt(cycle) == '0') {

                    itr.remove();

                } else if (result < 0 && line.charAt(cycle) == '1') {

                    itr.remove();

                }

            }

            cycle++;
            counter = 0;

        }

        cycle = 0;

        // Finds the CO2 scrubber rating by using the same methods as above.

        while (contentsSecondCopy.size() > 1) {

            int result = getMostCommon(contentsSecondCopy);

            Iterator<String> ditto = contentsSecondCopy.iterator();

            while (ditto.hasNext()) {

                String line = ditto.next();

                if (result >= 0 && line.charAt(cycle) == '1') {

                    ditto.remove();

                } else if (result < 0 && line.charAt(cycle) == '0') {

                    ditto.remove();

                }

            }

            cycle++;
            counter = 0;

        }

        int oxygenGeneratorRating = Integer.parseInt(contentsFirstCopy.get(0), 2);
        int scrubberRating = Integer.parseInt(contentsSecondCopy.get(0), 2);

        System.out.println(oxygenGeneratorRating * scrubberRating);

        scan.close();
        scanFirstCopy.close();
        scanSecondCopy.close();

    }

}