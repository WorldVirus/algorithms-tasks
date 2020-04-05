
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class test {
   
    
        class Item{
            int cost;
            int weight;
    
            public Item(int cost, int weight){
                this.cost = cost;
                this.weight = weight;
            }
            @Override
            public String toString(){
                return "Item{"+"cost="+cost+", weight="+ weight+'}';
            }
        }
       
        private void run() throws FileNotFoundException{
            Scanner input = new Scanner(new File("input.txt"));
            int n  = input.nextInt();
            int W = input.nextInt();
            Item[] items = new Item[n];
            for(int i = 0; i < n; i++){
                items[i] = new Item(input.nextInt(), input.nextInt());
            }
    
            for(int i = 0; i < n; i++){
                System.out.println(items[i]);
            }
        }
        public static void main(String[] args) throws FileNotFoundException {    
            new test().run();
          }
    }
