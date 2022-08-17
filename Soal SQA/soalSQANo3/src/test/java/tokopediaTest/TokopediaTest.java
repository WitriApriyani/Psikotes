package tokopediaTest;

import static org.testng.Assert.assertTrue;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;

public class TokopediaTest {
	
	WebDriver driver = null;
	String url = "https://www.tokopedia.com/search?st=product&q=sweater&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource=";
	
	@BeforeSuite
	public void setup() {
		System.setProperty("webdriver.chrome.driver", "C:\\webdriver\\chromedriver.exe");
		
		this.driver = new ChromeDriver();
		
		this.driver.manage().window().maximize();
		this.driver.get(this.url);
	}
	
	@Test
	public void scrollTest() {
		boolean state = true;
		int sizeExpect = 80;
		
		while (state) {
			try {
				JavascriptExecutor js = (JavascriptExecutor) driver;
				for (int y = 0; y <= 1000; y++) {
					js.executeScript("window.scrollBy(0, " + y + ")");
				}
				List<WebElement> harga = this.driver.findElements(By.xpath("//div[@data-testid='spnSRPProdPrice']"));
				assertTrue(sizeExpect == harga.size());
				state = false;
			} catch (Exception e) { }
		}
	}
	
	@AfterSuite
	public void close() {
		this.driver.close();
	}

}
