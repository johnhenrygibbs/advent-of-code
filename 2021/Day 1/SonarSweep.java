import java.io.File;
import java.util.ArrayList;
import java.util.Scanner;

public class SonarSweep {

    public static void main(String[] args) throws Exception {

        File file = new File("/Users/johngibbs/Desktop/John/Repositories/advent-of-code/2021/Day 1/input.txt");
        Scanner scan = new Scanner(file);
        ArrayList<String> contents = new ArrayList<String>();

        while (scan.hasNextLine()) {

            contents.add(scan.nextLine());

        }

        int counter = 0;

        for (int i = 1; i < contents.size(); i++) {

            int currentDepth = Integer.parseInt(contents.get(i));
            int previousDepth = Integer.parseInt(contents.get(i - 1));

            if (currentDepth > previousDepth) {

                counter++;

            }

        }

        System.out.println(counter);

        scan.close();

    }

}