import java.io.File;
import java.util.ArrayList;
import java.util.Scanner;

public class Dive {

    public static void main(String[] args) throws Exception {

        File file = new File("/Users/johngibbs/Desktop/John/Repositories/advent-of-code/2021/Day 2/input.txt");
        Scanner scan = new Scanner(file);
        ArrayList<String> contents = new ArrayList<>();

        while (scan.hasNextLine()) {

            contents.add(scan.nextLine());

        }

        // Solution for Part One

        int horizontal = 0;
        int depth = 0;

        for (int i = 0; i < contents.size(); i++) {

            String input = contents.get(i);
            String[] commands = input.split(" ");

            if (commands[0].equals("forward")) {

                horizontal += Integer.parseInt(commands[1]);

            } else if (commands[0].equals("up")) {

                depth -= Integer.parseInt(commands[1]);

            } else if (commands[0].equals("down")) {

                depth += Integer.parseInt(commands[1]);

            }

        }

        System.out.println(Math.abs(horizontal * depth));

        scan.close();

    }

}