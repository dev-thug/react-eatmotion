import classes from "./PostWriteForm.module.css";

const PostWriteForm = () => {


    return (
        <div>
            <div className={classes.menu_banner}>
                <div className={classes.menu_banner_title}>
                    <p className={classes.menu_tile_font}><strong>문의하기</strong></p>
                </div>
            </div>

            <div className={classes.boardmenu_div}>
                <div id={classes.boardmenu}>
                    <a href="#">문의게시판&nbsp;&nbsp;&nbsp;</a>
                    <a href="#"> 문의하기&nbsp;&nbsp;&nbsp;</a>
                </div>
            </div>

            <div className={classes.boardWriteForm_div}>
                <div>
                    <form>
                        <section className={classes.boardsection,classes.tablesection}>
                            <table border="1" className={classes.boardwrite_table}>
                                <tr>
                                    <td>작성자&nbsp;&nbsp;&nbsp;<input name="writer"/></td>
                                </tr>
                                <tr>
                                    <td>글제목&nbsp;&nbsp;&nbsp;<input name="title"/></td>
                                </tr>
                                <tr>
                                    <td><textarea name="content" className={classes.boardwrite_textarea}></textarea></td>
                                </tr>
                                <tr>
                                    <td>사진첨부&nbsp;&nbsp;&nbsp;<input type="file" name="file"/></td>
                                </tr>
                            </table>
                            <br></br>
                            <div align="center"><input type="submit" value="글쓰기" className={classes.inputBtn}/></div>
                        </section>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default PostWriteForm;