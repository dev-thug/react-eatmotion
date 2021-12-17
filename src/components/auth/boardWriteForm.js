import boardWriteForm from "boardWriteForm.css";

function boardWriteForm(){


    return(
        <nav>
            <div className="menu_banner">		
                <div className="menu_banner_title">
                    <p className="menu_tile_font"><strong>문의하기</strong></p>
                </div>
            </div>
            
            <div className="boardmenu_div">
                <div id="boardmenu">
                    <a href="boardList.html">문의게시판&nbsp;&nbsp;&nbsp;</a>
                    <a href="boardWriteForm.html"> 문의하기&nbsp;&nbsp;&nbsp;</a>
                </div>
            </div>	

            <div className="boardWriteForm_div">
                <div>
                    <form>
                        <section className="board-list table-common">
                            <table border="1" className="boardwrite_table">
                                <tr><td>작성자&nbsp;&nbsp;&nbsp;<input name="writer"/></td></tr>
                                <tr><td>글제목&nbsp;&nbsp;&nbsp;<input name="title"/></td></tr>
                                <tr><td><textarea name="content" className="boardwrite_textarea"></textarea></td></tr>
                                <tr><td>사진첨부&nbsp;&nbsp;&nbsp;<input type="file" name="file"/></td></tr>
                            </table>
                            <br></br><div align="center"><input type="submit" value="글쓰기" className="inputBtn"/></div>
                        </section>
                    </form>
                </div>		
            </div> 
        </nav>
    );

}

export default boardWriteForm;