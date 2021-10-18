
public class PiEstimate {

	public static void main(String[] args) {
		
		final double MAX = 10000000.0;
		int in = 0;
		double pi = 0;
		
		for (int i = 0; i <= MAX; i++) {
			double x = Math.random();
			double y = Math.random();
			if (Math.sqrt((x * x) + (y * y)) <= 1) {
				in++;
			}
		}
		
		pi = 4 * (in / MAX);
		System.out.println(pi);
	}
}
