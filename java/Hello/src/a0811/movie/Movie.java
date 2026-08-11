package a0811.movie;

public class Movie {
  private String title;
  private String director;
  private String genre;
  private String rathing;
  private boolean available = true;
  public Movie(String title, String director, String genre, String rathing) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.rathing = rathing;
  }
  public String getTitle() {
    return title;
  }
  public void setTitle(String title) {
    this.title = title;
  }
  public String getDirector() {
    return director;
  }
  public void setDirector(String director) {
    this.director = director;
  }
  public String getGenre() {
    return genre;
  }
  public void setGenre(String genre) {
    this.genre = genre;
  }
  public String getRathing() {
    return rathing;
  }
  public void setRathing(String rathing) {
    this.rathing = rathing;
  }
  public boolean isAvailable() {
    return available;
  }
  public void setAvailable(boolean available) {
    this.available = available;
  }
  @Override
  public String toString() {
    return "제목=" + title + ", 감독=" + director + ", 장르=" + genre + ", 연령=" + rathing
         + (available?"예매 가능":"예매 불가") + "]";
  }
  public void movie(){
    this.available = false;
  }

  
  
}
