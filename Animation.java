
import java.awt.Color;
import java.awt.Graphics;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.Timer;

public class Animation extends JPanel implements ActionListener {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	Timer time = new Timer(5, this);
	
	//shape 1
	final int speed1 = 5;
	int x1 = 0, velX1 = speed1;
	int y1 = 0, velY1 = speed1;
	//shape 2
	final int speed2 = 4;
	int x2 = 890, velX2 = speed2;
	int y2 = 465, velY2 = speed2;
	//shape 3
	final int speed3 = 3;
	int x3 = 840, velX3 = speed3;
	int y3 = 0, velY3 = speed3;
	//shape 4
	final int speed4 = 6;
	int x4 = 0, velX4 = speed4;
	int y4 = 490, velY4 = speed4;
	//shape 5
	final int speed5 = 2;
	int x5 = 0, velX5 = speed5;
	int y5 = 200, velY5 = speed5;
	
	public void paintComponent(Graphics g) {
		
		super.paintComponent(g);
		
		//shape 1
		g.setColor(Color.BLACK);
		g.fillOval(x1, y1, 50, 50);
		//shape 2
		g.setColor(Color.RED);
		g.fillOval(x2, y2, 100, 100);
		//shape 3
		g.setColor(Color.CYAN);
		g.fillOval(x3, y3, 150, 150);
		//shape 4
		g.setColor(Color.MAGENTA);
		g.fillOval(x4, y4, 75, 75);
		//shape 5
		g.setColor(Color.DARK_GRAY);
		g.fillOval(x5, y5, 200, 200);
		
		time.start();
	}
	
	public void actionPerformed(ActionEvent e) {
		
		//shape 1
		if (x1 < 0 || x1 > 940) {
			velX1 *= -1;
		}
		if (y1 < 0 || y1 > 515) {
			velY1 *= -1;
		}
		//shape 2
		if (x2 < 0 || x2 > 890) {
			velX2 *= -1;
		}
		if (y2 < 0 || y2 > 465) {
			velY2 *= -1;
		}
		//shape 3
		if (x3 < 0 || x3 > 840) {
			velX3 *= -1;
		}
		if (y3 < 0 || y3 > 415) {
			velY3 *= -1;
		}
		//shape 4
		if (x4 < 0 || x4 > 915) {
			velX4 *= -1;
		}
		if (y4 < 0 || y4 > 490) {
			velY4 *= -1;
		}
		//shape 5
		if (x5 < 0 || x5 > 790) {
			velX5 *= -1;
		}
		if (y5 < 0 || y5 > 365) {
			velY5 *= -1;
		}
		
		//shape 1
		x1 += velX1;
		y1 += velY1;
		//shape 2
		x2 += velX2;
		y2 += velY2;
		//shape 3
		x3 += velX3;
		y3 += velY3;
		//shape 4
		x4 += velX4;
		y4 += velY4;
		//shape 5
		x5 += velX5;
		y5 += velY5;
		
		repaint();
	}
	
	public static void main(String[] args) {
		
		Animation a = new Animation();
		JFrame jf = new JFrame();
		jf.setTitle("Spook");
		jf.setSize(1000, 600);
		jf.setResizable(false);
		jf.setVisible(true);
		jf.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		jf.add(a);
	}
}
