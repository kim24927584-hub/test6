package a0813.movie;

public class Movie {
  private String director;
  private int year;
  private String title;

  public Movie(String title, String director, int year) {
    this.title = title;
    this.director = director;
    this.year = year;
  }

  public String getTitle() {
    return title;
  }

  public String getDirector() {
    return director;
  }

  public int getYear() {
    return year;
  }
}
