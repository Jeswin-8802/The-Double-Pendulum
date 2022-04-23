# The-Double-Pendulum
 A Double Pendulum is simply two pendulums attached together. The system although very simple, exhibits highly chaotic movements and is one of the simplest demonstrations of a chaotic system.
 
 A simple pendulum in comparison is a predictable system with its movements being very easy to ascertain and predict with high accuracy. But when another pendulum is attached to its end, the system turns chaotic. There is no real explanation as to why this occurs and it is representative of the chaotic nature of the universe.
 
 *Relatively simple actions invites chaos*

# How It's Made

The equations to find the cartesian co-ordinates of the two pendulums are as follows:
 
*x<sub>1</sub> = l<sub>1</sub> sinθ<sub>1</sub> <br>*
*y<sub>1</sub> = - l<sub>1</sub> cosθ<sub>1</sub> <br>*
*x<sub>2</sub> = l<sub>1</sub> sinθ<sub>1</sub> + l<sub>2</sub> sinθ<sub>2</sub> <br>*
*y<sub>2</sub> = - l<sub>1</sub> cosθ<sub>1</sub> - l<sub>2</sub> cosθ<sub>2</sub> <br>*

where, <br>
&nbsp;&nbsp;*(x<sub>1</sub>, y<sub>1</sub>)* represents the co-ordinates of pendulum 1, <br>
&nbsp;&nbsp;*(x<sub>2</sub>, y<sub>2</sub>)* represents the co-ordinates of pendulum 2

*θ<sub>1</sub>*'' and *θ<sub>2</sub>*'' represents the angular accelerations of both the pendulums. The equations of motion for the angles  *θ<sub>1</sub>* and *θ<sub>2</sub>* are calculated using the equations given below by successively finding the acceleration, velocity and position. Once the angular positon is obtained, we can draw the pendulum with it's updated position.

<table class="fraction">
  <tbody>
    <tr>
      <td rowspan="2"><i>θ</i><sub>1</sub>''&nbsp;=&nbsp;</td>
      <td>
       <p align="center">
        −<i>g</i> (2 <i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) sin <i>θ</i
        ><sub>1</sub> − <i>m</i><sub>2</sub> <i>g</i> sin(<i>θ</i><sub>1</sub> −
        2 <i>θ</i><sub>2</sub>) − 2 sin(<i>θ</i><sub>1</sub> − <i>θ</i
        ><sub>2</sub>) <i>m</i><sub>2</sub> (<i>θ</i><sub>2</sub>'<sup>2</sup>
        <i>l</i><sub>2</sub> + <i>θ</i><sub>1</sub>'<sup>2</sup> <i>l</i
        ><sub>1</sub> cos(<i>θ</i><sub>1</sub> − <i>θ</i><sub>2</sub>))
        </p>
      </td>
    </tr>
    <tr>
      <td class="upper_line">
       <p align="center">
        <i>l</i><sub>1</sub> (2 <i>m</i><sub>1</sub> + <i>m</i><sub>2</sub> −
        <i>m</i><sub>2</sub> cos(2 <i>θ</i><sub>1</sub> − 2 <i>θ</i
        ><sub>2</sub>))
       </p>
      </td>
    </tr>
  </tbody>
</table>

<table class="fraction">
  <tbody>
    <tr>
      <td rowspan="2"><i>θ</i><sub>2</sub>''&nbsp;=&nbsp;</td>
      <td>
       <p align="center">
        2 sin(<i>θ</i><sub>1</sub> − <i>θ</i><sub>2</sub>) (<i>θ</i
        ><sub>1</sub>'<sup>2</sup> <i>l</i><sub>1</sub> (<i>m</i><sub>1</sub> +
        <i>m</i><sub>2</sub>) + <i>g</i>(<i>m</i><sub>1</sub> + <i>m</i
        ><sub>2</sub>) cos <i>θ</i><sub>1</sub> + <i>θ</i><sub>2</sub>'<sup
          >2</sup
        >
        <i>l</i><sub>2</sub> <i>m</i><sub>2</sub> cos(<i>θ</i><sub>1</sub> −
        <i>θ</i><sub>2</sub>))
        </p>
      </td>
    </tr>
    <tr>
      <td class="upper_line">
       <p align="center">
        <i>l</i><sub>2</sub> (2 <i>m</i><sub>1</sub> + <i>m</i><sub>2</sub> −
        <i>m</i><sub>2</sub> cos(2 <i>θ</i><sub>1</sub> − 2 <i>θ</i
        ><sub>2</sub>))
        </p>
      </td>
    </tr>
  </tbody>
</table>

#
![Screenshot 2022-04-23 231108](https://user-images.githubusercontent.com/84562594/164929720-81794d37-2162-4e37-8268-ad2abc1532ce.png)

# References

* https://github.com/theabbie/DoublePendulum
* http://www.physicsandbox.com/projects/double-pendulum.html
* https://physicspython.wordpress.com/2019/06/20/double-pendulum-part-3/
