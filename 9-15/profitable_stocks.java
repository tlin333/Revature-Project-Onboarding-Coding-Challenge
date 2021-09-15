import java.util.Arrays;


/*ServiceNow:
Imagine you are responsible for a portfolio of profitable stocks represented in an array. 
Each item in the array represents the yearly profit of a corresponding stock. 
The analyst gathers all distinct pairs of stocks that reached the target profit. 
Distinct pairs are pairs that differ in at least one element. 
Given the array of profits, find the number of distinct pairs of stocks where the sum of each pair’s profits is exactly equal to the target sum.
Example:
stocksProfit = [5, 7, 9, 13, 11, 6, 6, 3, 3]
target = 12 profit's target
*/

public class profitable_stocks {
	
	public static void main(String[] args) {
		int stocksProfit[] = {5,7,9,13,11,6,6,3,3};
		int target = 12; 
	    int result = stockPairs(stocksProfit, target);
	    System.out.println(result);
	}
	
	public static int stockPairs(int stocksProfit[],int target){
	    Arrays.sort(stocksProfit);
	    int left = 0;
	    int right = stocksProfit.length-1;
	    int pairs = 0;
	    while(left < right){
	        if(stocksProfit[left] + stocksProfit[right] == target){ 
	            left += 1; 
	            right -=1;
	            pairs += 1;
	        }
	        else if(stocksProfit[left] + stocksProfit[right] < target){
	        	left += 1; 
	        }
	        else{
	        	right -= 1;
	        }
	    }
	    return pairs;
	}
	
	

	
}
	
