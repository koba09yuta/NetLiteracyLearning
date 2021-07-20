package jp.co.benesse.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;

/**
*
* [機 能] フィルタークラス<br>
* [説 明] エンコーディングを行う。<br>
* [備 考] なし<br>
* [環 境] OpenJDK <br>
* Copyright ©Benesse Corporation. All rights reserved.
 * @author [作 成] 2021/07/20 zono
*/
@WebFilter("/*")
public class EncodingFilter implements Filter {
	
	public void init(FilterConfig fConfig) throws ServletException {
	}
	
	/**
	 * 
	 * [機 能] doFilterメソッド<br>
	 * [説 明] エンコーディングを行う。<br>
	 * [備 考] なし
	 */
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		
		// URIの取得
		String requestURI = ((HttpServletRequest) request).getRequestURI();
		
		// エンコーディング
		if (!requestURI.endsWith(".css")) {
			request.setCharacterEncoding("UTF-8");
		}
		
		chain.doFilter(request, response);
	}

	public void destroy() {
	}
	
}
