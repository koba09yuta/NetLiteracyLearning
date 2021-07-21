package jp.co.benesse.controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * [機 能] タイトル画面サーブレット<br>
 * [説 明] リクエストを受け付け、レスポンスを返す。<br>
 * [備 考] なし<br>
 * [環 境] OpenJDK 11 <br>
 * Copyright ©Benesse Corporation. All rights reserved.
 * @author [作 成] 2021/07/21 zono
 */
@WebServlet("/title")
public class TitleServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * [機 能] doGetメソッド<br>
	 * [説 明] にフォワードする。<br>
	 * [備 考] なし
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		// にフォワード
		RequestDispatcher disptacher = request
				.getRequestDispatcher("/WEB-INF/jsp/");
		disptacher.forward(request, response);
		return;
	}
}
